db.listingsAndReviews.find(
    
    {
        "property_type": "House"
    },
    {
        "reviews": 
        {
            $slice:3 //Kaç adet veri listeleneceğini belirtmek için kullanılır.
        }
    }
    )   