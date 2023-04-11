db.listingsAndReviews.updateOne(

{
    "minimum_nights": 
    {
        $gt: 4
    }
},
{
    $set:
    {
        "minimum_nights": "1"
    }
}

)