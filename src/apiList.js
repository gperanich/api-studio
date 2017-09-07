export const getApiList = () => {
    return {
        "People": [
            {
                "method": "GET",
                "url": "/people",
                "description": "get all people"
            },
            {
                "method": "GET",
                "url": "/people/{id}",
                "description": "get person by specific id"
            },
            {
                "method": "POST",
                "url": "/people",
                "description": "create a new person"
            },
            {
                "method": "PUT",
                "url": "/people/{id}",
                "description": "update a person"
            }
        ],
        "Films": [
            {
                "method": "GET",
                "url": "/films",
                "description": "get all films"
            },
            {
                "method": "GET",
                "url": "/films/{id}",
                "description": "get a film by specific id"
            }
        ],
        "Starships": [
            {
                "method": "GET",
                "url": "/starhips",
                "description": "get all starships"
            },
            {
                "method": "GET",
                "url": "/starships/{id}",
                "description": "get a starship by specific id"
            },
            {
                "method": "POST",
                "url": "/starships",
                "description": "create a new starship"
            },
            {
                "method": "PUT",
                "url": "/starships/{id}",
                "description": "update a starship's details"
            }
        ],
        "Vehicles": [
            {
                "method": "GET",
                "url": "/vehicles",
                "description": "get all vehicles"
            },
            {
                "method": "GET",
                "url": "/vehicles/{id}",
                "description": "get a vehicle by specific id"
            },
            {
                "method": "POST",
                "url": "/vehicles",
                "description": "create a new vehicle"
            },
            {
                "method": "PUT",
                "url": "/vehicles/{id}",
                "description": "update a vehicle"
            }
        ],
        "Planets": [
            {
                "method": "GET",
                "url": "/planets",
                "description": "get all planets"
            },
            {
                "method": "GET",
                "url": "/planets/{id}",
                "description": "get a planet by specific id"
            },
            {
                "method": "PUT",
                "url": "/planets/{id}",
                "description": "update a planet with new information"
            }
        ]
    }
}