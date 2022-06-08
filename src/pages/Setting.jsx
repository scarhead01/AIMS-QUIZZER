import React from 'react';
import Slider, { SliderThumb } from '@mui/material/Slider';
import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import { red } from '@material-ui/core/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled as mstyled} from '@mui/material/styles';
import {FaMusic} from "react-icons/fa";
import {AiFillSound} from "react-icons/ai";

// import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import Box from '@mui/material/Box';

function valuetext(value) {
  return `${value}°C`;
}

const Setting = () => {
  return <SettingsCon>
  
  <SliderCon>
    <SoundEffectsCon>
    <h1>Sound Effects</h1>
    <SliderCons><PrettoSlider defaultValue={50}  valueLabelDisplay="auto" /></SliderCons><SeIcon><AiFillSound /></SeIcon>
    </SoundEffectsCon>
    <MusicCon>
    <h1>Music</h1>
    <SliderConsM><PrettoSlider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/></SliderConsM><SeIcon className = "MIcon"><FaMusic /></SeIcon>
    </MusicCon>
    {/* <Tooltip enterTouchDelay={0} placement="top" title="Music">
    <Box sx={{ m: 3 }} />
      <Typography gutterBottom>pretto.fr</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />
      <Box sx={{ m: 3 }} />
    </Tooltip> */}
  </SliderCon> 
 <SwitchCon>
 <FormGroup>
  <FormControlLabel
        label=""
        control={<MaterialUISwitch sx={{ m: 1 }}  />}
        
      />
      <h1>Dark Mode Settings</h1>
      </FormGroup>
      </SwitchCon>
  </SettingsCon>
};

const SettingsCon = styled.div`
position: relative;
  height: 300px;
  width: 600px;
  margin: auto;
  background: rgba(220, 198, 239, 0.32);
  border-radius: 20px;
  padding-top:40px;
  margin-top: 125px;
  justify-content: center;
  align-items: center;
`
const SoundEffectsCon = styled.div`
   width: 100%;
  display: inline-flex;
  flex-direction: row;
  margin: 10px 50px;
  & h1{
    font-size: 20px;
    color: #fff;
    font-style: halant;
  }
`
const MusicCon = styled.div`
  position: absolute;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  margin: 10px 50px;
  & h1{
    font-size: 20px;
    color: #fff;
    font-style: halant;
  }
`
const SliderCons = styled.div`
  position: relative;
  width: 40%;
  top: 12px;
  left: 50px;
  
`
const SliderConsM = styled.div`
  position: relative;
  width: 40%;
  top: 12px;
  left: 122px;
`
const SliderCon = styled.div`
 
`
const PrettoSlider = styled(Slider)({
  color: '#d36fb2',
  height: 100,
  '& 	.MuiSlider-rail': {
   color: '#fff',
   height: 8,
  },
  '& .MuiSlider-track': {
    border: 'none',
    color: '#c23de4',
    height: 8,
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '3px solid #fd7cf2',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#273b2f',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const MaterialUISwitch = mstyled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#ffffff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#000000',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#ffffff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#ffef08',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#ffffff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));
 
const SwitchCon = styled.div`
  position: relative;
  top: 120px;
  left: 170px;
  margin: auto;
  display: block;
  & h1{
    color: #000000;
    bottom:53px ;
    position: relative;
    font-size:20px ;
    left: 80px;
  }
`
const SeIcon = styled.div`
    position: relative;
    font-size: 37px;
    color: #ffffff;
    left : 94px;
    top: 6px;
    &.MIcon {
      position:relative ;
      left : 165px;
      color: #ffffff;
      font-size: 30px;
    }
`
    



export default Setting;