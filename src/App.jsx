import React from 'react';
import './index.css';
import HomePage from './components/HomePage';
import { Alert, Avatar, Badge, Banner, Button, Card } from 'flowbite-react';
import { HiFolderRemove, HiQuestionMarkCircle } from 'react-icons/hi';
import avatarImg from './assets/AI-example-1000.png';
import { MdAnnouncement } from 'react-icons/md';
import sunImage from './assets/waves.webp';
import ResponsiveModal from './components/ResponsiveModal';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-blue-500 to-gray-300">
      {/* Header Section */}
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

      {/* Banner */}
      <div className="component">
        <h1>Banner</h1>
        <Banner>
          <div className='flex w-fit justify-between bg-gray-700 p-4 hover:bg-gray-800 text-white rounded-sm'>
            <div className='mx-auto flex items-center'>
              <p className='flex items-center text-sm font-normal text-white'>
                <MdAnnouncement className='mr-4 h-4 w-4 ' />
                <span className='text-gray-50 '>This is a notification banner</span>
              </p>
            </div>
            <Banner.CollapseButton className='text-white'>
              <HiQuestionMarkCircle className='h-4 w-4 m-2' />
            </Banner.CollapseButton>
          </div>
        </Banner>
      </div>

      {/* Cards */}
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
          <p className="font-normal text-gray-700">
            Subscribe to our Youtube channel: code
          </p>
        </Card>
      </div>

      {/* Open the ResponsiveModal */}
      <div className='component'>
        <ResponsiveModal />
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-700 py-8 bg-white w-full">
        <p className="text-sm">&copy; 2024 WebDesignCo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
