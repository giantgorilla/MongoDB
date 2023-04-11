db.listingsAndReviews.find(
    {
        "address.street": 
        {
            $exists : false
        }
    }
)