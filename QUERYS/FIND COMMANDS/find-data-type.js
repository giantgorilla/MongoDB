db.listingsAndReviews.find(
    
    {
        "host.host_verifications": 
        {
            $type: 4
        }
    }
    )