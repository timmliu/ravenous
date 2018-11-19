const apiKey = "WQ3LXh-4A8BCHEWtwu2hU6-3_Hx4UF_KTZxHxpR6H9AIbMezvPEjOipKIbZLKHjiNrOLRQBp91xoZdkuZBNO-I9lEFgnMQ3DkGI_Uen9HiK8-S8fURgPz0nxeVTyW3Yx"
const corsAnywhere = "https://cors-anywhere.herokuapp.com/"

const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(
      `${corsAnywhere}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          "Authorization": `Bearer ${apiKey}`
        }
      }
    )
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        })
      }
    })
  }
}

export default Yelp
