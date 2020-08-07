const apiKey = 'qgCvyzhURsagarvubb01SqCN_3XYbZutpe2vgqWP98FVY0_0vcH93O4_DVCEUOQppCGzMxxX5_v7SQfVXsCYAQ55Il0rDZwjyesDz-Irptqk291ZiMfZN4LVbY0rX3Yx';

const yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
        }).then(response => {
            console.log(response.json);
            return response.json();
        }).then(jsonResponse => {
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
                    };
                });
            }
        });
    }
};

export default yelp;