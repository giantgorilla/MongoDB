db.testArrayPfED.find(
    
    {
        "instock": {
            
            "qty": 5, 
            "warehouse": "A"
        }
    }
    ) //Sıralı olarak okumaya başladığı için veri getirir.

db.testArrayPfED.find(
    
    {
        "instock": {
            
            "warehouse": A,
            "qty": "5"
        }
    }
    ) //Sıralı olarak okumaya başladığı için veri getirmez.

db.testArrayPfED.find(
    {
        "instock.qty": 5
    }
    ) //Sıra bağımsız olması için bu sorguyu kullanırız.

db.testArrayPfED.find(
    {
        "instock.1.qty": 5
    }
    ) //1. indis değerine sahip değerleri getirir.

db.listingsAndReviews.find(
    {
        "reviews.reviewer_name":"Alex"
    }
    )

