import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel, TextField, Button } from '@mui/material';
import axios from 'axios';

const SearchPage = () => {
  const [userId, setUserId] = React.useState(null);
  const [cities, setCities] = React.useState([]);
  const [city, setCity] = React.useState('');
  const [minPrice, setMinPrice] = React.useState(100);
  const [maxPrice, setMaxPrice] = React.useState(9950);
  const [results, setResults] = React.useState([]);
  const token = localStorage.getItem('token');
  const config = {
    headers: { 'Authorization': `Token ${token}` }
  };
  console.log(token)
  
  React.useEffect(() => {    
    axios.get('http://localhost:8000/api/current_user/', config )
    .then(response => {
      setUserId(response.data.id);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  }, []);


  React.useEffect(() => {
    axios.get('http://localhost:8000/api/cities/')
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

    const handleSaveSearch = () => {
    const confirm = window.confirm('Do you want to save this search to be notified when there are new apartments?');
    if (confirm) {
      const searchFilter = {
        user: userId,
        city_code: city,
        price_min: minPrice,
        price_max: maxPrice,
        notify_by_phone: true,
      };
      
      axios.post('http://localhost:8000/api/searches/', searchFilter, config)
        .then(response => {
          console.log("Search filter saved: ", response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  };
  
  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const searchApartments = () => {
    const searchParams = {
      offset: '0',
      limit: '40',
      category_id: '4777',
      region_id: city,
      sort_by: 'created_at:desc',
      'filter_float_price:from': minPrice,
      'filter_float_price:to': maxPrice,
    };


    // https://www.olx.pt/api/v1/offers/?offset=0&limit=40&category_id=4777&region_id=15&&sort_by=created_at:desc&filter_float_price%3Afrom=200&filter_float_price%3Ato=400
    axios.get('/api/v1/offers/', { params: searchParams })
      .then(response => {
        console.log("API Response: ", response.data); // Log the full API response
        // const simulatedResponse = {
        //   data: {
        //     data: [
        //       {
        //         title: 'Apartment 1',
        //         last_refresh_time: '2023-07-12T09:33:19+01:00',
        //         created_time: '2023-07-12T09:33:19+01:00',
        //         params: [
        //           {
        //             key: 'price',
        //             value: {
        //               value: '1000',
        //             },
        //           },
        //         ],
        //         url: 'http://example.com/apartment1',
        //       },
        //       {
        //         title: 'Apartment 2',
        //         last_refresh_time: '2023-07-12T09:34:19+01:00',
        //         created_time: '2023-07-12T09:34:19+01:00',
        //         params: [
        //           {
        //             key: 'price',
        //             value: {
        //               value: '2000',
        //             },
        //           },
        //         ],
        //         url: 'http://example.com/apartment2',
        //       },
        //     ],
        //   },
        // };

        // const apartments = simulatedResponse.data.data.map(apartment => ({
        const apartments = response.data.data.map(apartment => ({
          description: apartment.title,
          lastUpdated: apartment.last_refresh_time,
          created: apartment.created_time,
          price: apartment.params.find(param => param.key === 'price').value.value,
          link: apartment.url,
        }));
        console.log("Mapped Apartments: ", apartments); // Log the mapped apartments
        setResults(apartments);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

 
  React.useEffect(() => {
    if (city) { // only run the search if a city is selected
      searchApartments();
    }
  }, [city]);

  return (
    <div>
      <Navbar />
      <Box sx={{ bgcolor: '#f5f5f5', height: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Hunt your perfect home
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl variant="filled" sx={{ minWidth: 120 }}>
            <InputLabel id="city-label">City</InputLabel>
            <Select
              labelId="city-label"
              id="city"
              value={city}
              onChange={e => setCity(e.target.value)}
            >
              {cities.map(city => (
                <MenuItem key={city.id} value={city.olx_code}>{city.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="min-price"
            label="Min Price"
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            InputProps={{ inputProps: { min: 100, max: 9950, step: 50 } }}
          />
          <TextField
            id="max-price"
            label="Max Price"
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            InputProps={{ inputProps: { min: 100, max: 9950, step: 50 } }}
          />
          <Button variant="contained" onClick={handleSaveSearch}>Save Search</Button>
        </Box>
      </Box>
      {results.map(result => (
        <div key={result.link}>
          <p>Description: {result.description}</p>
          <p>Last Updated: {new Date(result.lastUpdated).toLocaleDateString()}</p>
          <p>Created: {new Date(result.created).toLocaleDateString()}</p>
          <p>Price: {result.price}€</p>
          <a href={result.link}>Link</a>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default SearchPage;
