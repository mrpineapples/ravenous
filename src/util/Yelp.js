const apiKey = "yppXxy_j5X8yypOgm6DilCDDuqxieA9Bcvu-eX4EHg2hP585idS9BQZcY7ea9Z-cpWQ9Hfc1m3qcij8ZP24GXzSkIdxmORgc3y4C4e2S0-V-F6nRGH08m9Nl55fMW3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          console.log(business);
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
            reviewCount: business.review_count,
            url: business.url
          }
        });
      }
    });
  }
};

export default Yelp;
