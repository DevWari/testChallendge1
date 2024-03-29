
// get user info

exports.getUserInfo = async function (req, res, next) {    
    
    const response = {        
        "results": [
            {
                "gender": "female",
                "name": {
                    "title": "Madame",
                    "first": "Romana",
                    "last": "Francois"
                },
                "location": {
                    "street": {
                        "number": 3471,
                        "name": "Rue Dubois"
                    },
                    "city": "Brütten",
                    "state": "Fribourg",
                    "country": "Switzerland",
                    "postcode": 6951,
                    "coordinates": {
                        "latitude": "-54.4721",
                        "longitude": "30.6940"
                    },
                    "timezone": {
                        "offset": "+6:00",
                        "description": "Almaty, Dhaka, Colombo"
                    }
                },
                "email": "romana.francois@example.com",
                "login": {
                    "uuid": "d5ac5d23-f1f2-41c7-87fe-6d5d4eaa448c",
                    "username": "tinykoala839",
                    "password": "wp2003wp",
                    "salt": "f9keVBXE",
                    "md5": "e30841088e1974b003980f11ec19b835",
                    "sha1": "25e4069400001e76738ee6bf13bd524a6df2f2d8",
                    "sha256":
                    "f38eff8fdee487e1888fb93dd91fd2cafecd83c9fcbe49658d1a070125854d9a"
                },
                "dob": {
                    "date": "1964-04-24T06:25:40.777Z",
                    "age": 57
                },
                "registered": {
                    "date": "2016-09-28T11:15:47.538Z",
                    "age": 5
                },
                "phone": "078 225 75 50",
                "cell": "075 437 25 80",
                "id": {
                    "name": "AVS",
                    "value": "756.9989.7526.17"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/27.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/27.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
                },
                "nat": "CH"
            }
        ],
        "info": {
            "seed": "934a8f5063e7b2ec",
            "results": 1,
            "page": 1,
            "version": "1.3"
        }    
    }
    return res.send (response)   
}




