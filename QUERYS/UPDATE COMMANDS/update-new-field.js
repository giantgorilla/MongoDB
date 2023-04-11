db.listingsAndReviews.updateMany(
    {
        "price": 
        {
            $gt:5000,
            $lt:10000
        }
    },
    {
        $set:
        {
            "status": "A" //Update ile birlikte yeni bir field eklenebilir.
        }
    }
)