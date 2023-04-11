db.listingsAndViews.updateMany(

    {
        "address.country": "Turkey"
    },
    {
        $set : 
        {
            "address.country": "Türkiye"
        }
    }
    )