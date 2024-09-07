import React from 'react';
import './index.css';
import sunImage from './assets/waves.webp';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { Alert, Avatar, Badge, Banner, Button, Card } from 'flowbite-react';
import { HiFolderRemove, HiQuestionMarkCircle, HiX } from 'react-icons/hi';
import avatarImg from './assets/AI-example-1000.png';
import {MdAnnouncement} from 'react-icons/md';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-blue-500 to-gray-300">
      {/* Header Section */}
      <Header />
      <HomePage />

      {/* Alerts */}
      <div className='component'>
        <h1>Alert</h1>
        <Alert color='info' onDismiss={() => alert('Alert Dismissed!')}>
          <span>This is an info alert</span>
        </Alert>
      </div>
      <div className='component'>
        <h1>Alert</h1>
        <Alert color='warning' onDismiss={() => alert('Alert Dismissed!')}>
          <span>This is a warning alert</span>
        </Alert>
      </div>

      {/* Avatar */}
      <div className='component'>
        <h1>Avatar</h1>
        <div className='flex flex-wrap gap-4 w-fit p-2'>
          <Avatar rounded img={avatarImg} className='hover:bg-yellow-200 duration-150' />
          <Avatar img={avatarImg} />
        </div>
      </div>

      {/* Badges */}
      <div className='component'>
        <h1>Badge</h1>
        <div className='flex flex-wrap gap-4'>
          <Badge color='warning' icon={HiQuestionMarkCircle}>Info</Badge>
          <Badge color='failure' icon={HiFolderRemove}>Info</Badge>
          <Badge>Info</Badge>
        </div>
      </div>
<div className="component">
  <h1>Banner</h1>
  <Banner>
    <div className='flex w-fit justify-between bg-gray-700 p-4 hover:bg-gray-800 text-white rounded-sm'>
      <div className='mx-auto flex items-center'>
      <p className='flex items-center text-sm font-normal text-white'>
<MdAnnouncement className='mr-4 h-4 w-4 ' /> <span className='text-gray-50 '>This is a notification banner</span>
 </p>
      </div>
      <Banner.CollapseButton className='text-white'>
        <HiX className='h-4 w-4 m-2' />

      </Banner.CollapseButton>
      </div>
   

  </Banner>
</div>
<div className="component">
  <h1>Button</h1>
  <div className="flex flex-wrap gap-2">
    <Button onClick={() => alert('default')}>Default</Button>
    <Button color='purple' onClick={() => alert('purple')}>purple</Button>
    <Button color='purple' pill onClick={() => alert('purple')}>purple</Button>

  </div>

</div>
<div className="component">
  <h1> Card with Image</h1>
  <Card
className='md:max-w-sm max-w-[20rem]'
imgAlt='logo'
imgSrc={sunImage}
>
  <h5 className='text-2xl font-bold tracking-tight text-gray-900'>
    Learn to code 
  </h5>
  <p classname="font-normal text-gray-700">
    Subscribe to our Youtube chasnnel: code
  </p>
</Card>

</div>
      {/* Main Section */}
      <header className="text-white text-center py-10">
        <h1 className="text-5xl font-extrabold mb-4">Creative Web Design Solutions</h1>
        <p className="text-lg font-light mb-8">
          We craft beautiful websites that drive your business forward.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition">Our Services</button>
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">Get in Touch</button>
        </div>
      </header>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full px-4 mt-10">
        <img src={sunImage} alt="Sun" className="w-full max-w-md rounded-lg shadow-lg transform transition hover:scale-105" />
      </div>

      {/* Additional Section */}
      <section className="bg-white w-full py-16 mt-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mb-12">At WebDesignCo, we believe in creating websites that are not just visually stunning, but also provide a seamless user experience.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Custom Design</h3>
              <p className="text-gray-600">We create bespoke designs tailored to your business needs, ensuring that your website stands out from the competition.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Responsive Layouts</h3>
              <p className="text-gray-600">Our websites are built to look great on all devices, from desktops to smartphones.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">SEO Optimization</h3>
              <p className="text-gray-600">We ensure that your website is optimized for search engines, helping you reach a wider audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-700 py-8 bg-white w-full">
        <p className="text-sm">&copy; 2024 WebDesignCo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
