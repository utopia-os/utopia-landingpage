"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';


export const CustomizingSection: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section className="flex flex-col px-8 gap-12 items-center bg-sky-500/15 text-base-content py-42">
      <h2 className="md:text-4xl font-bold leading-10 text-center text-3xl">
      Get a custom Map for your Community
      </h2>
      <p className="text-center leading-8 text-lg md:text-xl max-w-4xl">
      Utopia empowers you to create maps specifically tailored to your community's goals by organizing elements into custom categories with personalized markers, colors, and icons, and providing easy access to key information through customizable pop-ups and detailed profiles.
      </p>
      <div className="flex flex-wrap gap-10 justify-center w-full">

        <div className='card bg-base-100 w-lg rounded-2xl'>
          <div className='card-body'>
            <img src='customizing/map.png'></img>
            <div className='items-center text-center sm:items-start sm:text-start'>
            <p className='text-2xl font-bold my-4'>Map</p>
            <p>You get your own customisable map where you and your community can add and organise items into predefined categories called layers. When item is clicked you can see a brief description in a popup or, if curious for more, view all the details in the profile.</p>
          </div>
          </div>
        </div>
        <div>
          <div className='card bg-base-100 max-w-lg  rounded-2xl'>
            <div className='card-body sm:flex-row space-x-4 items-center'>
              <img className='w-42' src='customizing/markers.png'></img>
              <div className='items-center text-center sm:items-start sm:text-start'  >
                <p className='text-2xl font-bold mb-4'>Markers</p>
                <p>A marker is a symbol or point on the map that indicates the location of a specific item. Intuitively guide your users with markers creating unique colors, shapes, and icons to align with your project’s identity.</p>
              </div>
            </div>
          </div>
          <div className='card bg-base-100 max-w-lg mt-8  rounded-2xl'>
            <div className='card-body sm:flex-row space-x-4 items-center'>
            <div className='items-center text-center sm:items-start sm:text-start'>
                <p className='text-2xl font-bold my-4'>Layers</p>
                <p>Basically a folder for all the items on the map. The structure of these categories is designed to match the purpose of your network. Each layer uses distinct symbols, colors, and displays its items with dedicated markers, popups, and profiles. </p>
              </div>
              <img className='w-42' src='customizing/layers.png'></img>
            </div>
          </div>
        </div>
        <div className='card bg-base-100 w-lg  rounded-2xl'>
            <div className='card-body sm:flex-row space-x-4 items-center'>
              <img className='w-42 h-fit' src='customizing/popups.png'></img>
              <div className='items-center text-center sm:items-start sm:text-start'>
                <p className='text-2xl font-bold my-4'>Popups</p>
                <p>A popup is a small window that opens when you click on a marker. It provides a quick preview of a place or object and can be customized to display the most relevant information for your needs, e.g. your profile, an event, a community, a place.</p>
              </div>
            </div>
          </div>
          <div className='card bg-base-100 w-lg  rounded-2xl'>
            <div className='card-body sm:flex-row space-x-4 items-center'>
            <div className='items-center text-center sm:items-start sm:text-start'  >
                <p className='text-2xl font-bold my-4'>Profiles</p>
                <p>A profile is more than just a detailed page—it’s a vibrant storytelling space where places and objects come to life. Designed to spark creativity, foster collaboration, and motivate real-world action—because every great idea deserves to be explored beyond the map!</p>
              </div>
              <img className='w-42' src='customizing/profile.png'></img>
            </div>
          </div>

      </div>
      <a
        href="mailto:map@utopia-lab.org?subject=Custom Utopia Map"
      >
        <span className="btn btn-lg h-12 mt-12 md:h-14 rounded-full text-white bg-[#2563eb] hover:bg-[#1e40af]">{t("Usecases_Button")}<i className="ti ti-arrow-up-right" />
        </span>
      </a>
    </section>
  );
};

