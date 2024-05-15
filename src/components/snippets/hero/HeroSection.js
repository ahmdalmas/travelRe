import React, { useState } from 'react'
import { Autocomplete, TextField, ListItem, ListItemText, InputAdornment, ListItemIcon, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TravelExplore } from '@mui/icons-material';
import Flag from 'react-world-flags';

import '../../../App.css';
import './HeroSection.css';

const countries = [
  { code: 'AE', name: 'United Arab Emirates', visaTime: '2 days' },
  { code: 'EG', name: 'Egypt', visaTime: '9 days' },
  { code: 'SG', name: 'Singapore', visaTime: '10 days' },
  { code: 'JP', name: 'Japan', visaTime: '30 days' },
  { code: 'TR', name: 'Türkiye', visaTime: '24 days' },
  { code: 'MY', name: 'Malaysia', visaTime: '15 days' },
];

function HeroSection() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/';
    navigate(path);
  }


  return (
    <div className='hero-container'>
      <video src='./videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>


      <form className='search'>
        <div className='search-container w-100'>
          <Autocomplete
            className='w-100'
            freeSolo
            options={countries}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <div className='d-flex'>
                <div className='justify-content-center align-content-center'></div>
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <TravelExplore sx={{ color: '#031244' }} className='fs-1 m-0' />
                      </InputAdornment>
                    ),

                  }}
                  hiddenLabel
                  placeholder="Where to?"
                  size="small"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                      '& input::placeholder': {
                        color: 'gray',
                        opacity: 1,
                        fontWeight: '500',
                        fontSize: '1.2rem',
                      },
                    }
                  }}
                  fullWidth
                />
              </div>
            )}
            PaperComponent={(props) => (
              <Paper
                {...props}
                className='custom-scrollbar'
                sx={{
                  backgroundColor: '#f0f0f0',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  '& .MuiAutocomplete-listbox': {
                    '& .MuiAutocomplete-option': {
                      '&:hover': {
                        backgroundColor: '#e0e0e0', // Change hover background color here
                      },
                    },
                  },
                  marginTop:'20px',
                  marginBottom:'20px',
                }}
              />
            )}
            renderOption={(props, option) => (
              <ListItem {...props} key={option.code}
                sx={{
                  backgroundColor: '#f0f0f0',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                  },
                }}
              >
                <ListItemIcon>
                  <Flag code={option.code} style={{ width: 32, height: 20 }} />
                </ListItemIcon>
                <ListItemText
                  primary={option.name}
                  secondary={`Visa in ${option.visaTime}`}
                />
              </ListItem>
            )}
          />
        </div>

        {/* <div className='search-container'>
          <button
            className='hero-btn'
            type='submit'
            onClick={routeChange}
          >
            Explore
          </button>
        </div> */}
      </form>
    </div>
  )
}

export default HeroSection;