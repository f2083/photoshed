import Cloudinary from 'cloudinary';

cloudinary.config({ 
  cloud_name: 'f2083', 
  api_key: '451224176951944', 
  api_secret: 'WbAVaGhUuXRYsbZn-j1e7_BeROg' 
});

cloudinary.api.resource('sample', 
  function(result)  { console.log(result) });