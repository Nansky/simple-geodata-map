## Simple Geodata Map with NextJS T3

This repo is created for submitting Bumi Vharta Technology Take home Test.

in this assignment, The application is built with Next.js, PostgreSQL (using Prisma as ORM client and migration) to store files metadata, and Minio S3 as blob storage. It allows you to upload, show the geodata file in json format and show in map. The application is built with Docker, so you can run it locally without installing any dependencies.

For Map component, i am using `leaflet` library to show simple map. I did not manage to deploy this to Vercel or Heroku due to some reason. so i only shows only screenshot result from my local run.

there are 2 components on sidebars, `Upload Page` and `View Map`. For upload page, You will see something like this:
<a href="https://ibb.co/GFQhkrC"><img src="https://i.ibb.co/4JRQM04/Screenshot-2024-03-17-at-23-08-15.png" alt="Screenshot-2024-03-17-at-23-08-15" border="0"></a>

Upload Page : 
<a href="https://ibb.co/r6ZnpdZ"><img src="https://i.ibb.co/NjLwNTL/Screenshot-2024-03-16-at-18-07-51.png" alt="Screenshot-2024-03-16-at-18-07-51" border="0"></a>

you can upload geodata file in json format. after that, you can select view map to see the geodata result based on uploaded file. 

for Map page, you will see something like this :
<a href="https://ibb.co/26Dv9rK"><img src="https://i.ibb.co/BPXypJs/Screenshot-2024-03-17-at-22-44-25.png" alt="Screenshot-2024-03-17-at-22-44-25" border="0"></a>

<a href="https://ibb.co/frPKyZN"><img src="https://i.ibb.co/NWHkJfN/Screenshot-2024-03-17-at-22-44-46.png" alt="Screenshot-2024-03-17-at-22-44-46" border="0"></a>

above image shows the upload files and when you choose file, it will show based on `features` field in geojson data, above example is only pin point the data based on coordinate like this
```json
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-6.2431169,106.8432962]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}
```

_limitation : only 1 feature data can shown in the map_ 