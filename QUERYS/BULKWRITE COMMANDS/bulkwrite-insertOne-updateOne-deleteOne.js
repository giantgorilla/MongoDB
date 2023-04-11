db.createCollection("bulkTest")

db.bulkTest.bulkWrite(

[
{
    insertOne:
    {
        "document":
        {
            "name": "Doğukan", 
            "surname": "Bostancı"
        }
    }
},
{
    updateOne:
    {
        "filter":
        {
            "name":"Doğukan"
        }, 
        "update":
        {
            $set:
            {
                "surname":"Bostanci"
            }
        }
    }
},
{
    deleteOne:
    {
        "filter":
        {
            "name": 
            "Gizem"
        }
    }
},
{
    replaceOne:
    {
        "filter":
        {
            "name": "Doğukan"
        }, 
        "replacement":
        {
            "name": "Doğukan", 
            "surname": "Bostancı", 
            "age": 21
        }
    }
}

]
)   