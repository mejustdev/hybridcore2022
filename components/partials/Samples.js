import React, { useState } from 'react';

import { Doughnut } from '@reactchartjs/react-chart.js';
import Modal from '../../lib/utils/Modal';
import CustomerTrafficData from './Charts/CustomerTrafficData';
import Abandonments from './Charts/Abandonments';
import CustomerFlow from './Charts/CustomerFlow';
import FutureTrends from './Charts/FutureTrends';
import ChannelsOfLeadCost from './Charts/ChannelsOfLeadCost';
import BoughtTogether from './Charts/BoughtTogether';
import VisitsTogether from './Charts/VisitsTogether';
import EffectiveKeyWords from './Charts/EffectiveKeyWords';
import EffectiveChannels from './Charts/EffectiveChannels';
import HiddenPurchasingPatterns from './Charts/EffectiveChannels';

const state = {
  1: {
    labels: ['Cart', 'Billing and Shipping', 'Payment', 'Review', 'Purchase Completed'],
    datasets: [
      {
        label: 'Conversion Carts',
        backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
        hoverBackgroundColor: ['#501800', '#4B5000', '#175000', '#003350', '#35014F'],
        data: [40, 25, 20, 10, 5],
      },
    ],
  },
};

function Samples() {
  const [customer, setCustomer] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [abandonments, setAbandonments] = useState(false);
  const [customerFlow, setCustomerFlow] = useState(false);
  const [futureTrends, setFutureTrends] = useState(false);
  const [channelsOfLeadCost, setChannelOfLeadCost] = useState(false);
  const [boughtTogether, setBoughtTogether] = useState(false);
  const [visitsTogether, setVisitsTogether] = useState(false);
  const [effectiveKeyWords, setEffectiveKeyWords] = useState(false);
  const [effectiveChannels, setEffectiveChannels] = useState(false);
  const [hiddenPurchasingPatterns, setHiddenPurchasingPatterns] = useState(false);

  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto px-3 sm:px-6'>
          <div className='py-12 md:py-20 border-t border-gray-800'>
            {/* Section header */}
            <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
              <h2 className='h2 mb-4 text-gradient  bg-gradient-to-r from-green-400 to-blue-500'>
                TARGETED MARKETING & SALES DATA ANALYTICS SAMPLES
              </h2>
            </div>

            {/* Team members */}
            <div
              className='sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3'
              data-aos-id-team
            >
              {/* 1st member */}
              <div
                className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'
                data-aos='fade-up'
                data-aos-anchor='[data-aos-id-team]'
              >
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>Top 10 Products Category</h4>
                </div>
              </div>

              {/* 2nd member */}
              <div
                className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-anchor='[data-aos-id-team]'
              >
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>
                    <a
                      href='#0'
                      onClick={(e) => {
                        e.preventDefault();
                        setVideoModalOpen(true);
                      }}
                    >
                      Conversion Path
                    </a>
                  </h4>
                </div>
                {/* Modal */}
                <Modal
                  id='conversion'
                  ariaLabel='modal-headline'
                  show={videoModalOpen}
                  handleClose={() => setVideoModalOpen(false)}
                >
                  <Doughnut
                    data={state[1]}
                    options={{
                      title: {
                        display: true,
                        text: 'Conversion Path',
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: 'right',
                      },
                    }}
                  />
                </Modal>
              </div>

              {/* 3rd member */}
              <div
                className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'
                data-aos='fade-up'
                data-aos-delay='200'
                data-aos-anchor='[data-aos-id-team]'
              >
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>
                    {' '}
                    <a
                      href='#0'
                      onClick={(e) => {
                        e.preventDefault();
                        setCustomer(true);
                      }}
                    >
                      Customer Traffic Data
                    </a>
                  </h4>
                </div>
                {/* Modal */}
                <Modal
                  id='customer-traffic'
                  ariaLabel='modal-headline'
                  show={customer}
                  handleClose={() => setCustomer(false)}
                >
                  <CustomerTrafficData />
                </Modal>
              </div>

              {/* 4th member */}
              <div
                className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-anchor='[data-aos-id-team]'
              >
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>
                    <a
                      href='#0'
                      onClick={(e) => {
                        e.preventDefault();
                        setAbandonments(true);
                      }}
                    >
                      Abandonments
                    </a>
                  </h4>
                </div>
                <Modal
                  id='conversion'
                  ariaLabel='modal-headline'
                  show={abandonments}
                  handleClose={() => setAbandonments(false)}
                >
                  <div className='flex flex-col md:items-center pl-5 '>
                    <Abandonments />
                  </div>
                </Modal>
              </div>

              {/* 5th member */}
              <div
                className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'
                data-aos='fade-up'
                data-aos-delay='400'
                data-aos-anchor='[data-aos-id-team]'
              >
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>
                    <a
                      href='#0'
                      onClick={(e) => {
                        e.preventDefault();
                        setCustomerFlow(true);
                      }}
                    >
                      Customer Flow
                    </a>
                  </h4>
                </div>
                <Modal
                  id='customer-flow'
                  ariaLabel='modal-headline'
                  show={customerFlow}
                  handleClose={() => setCustomerFlow(false)}
                >
                  <div className=' flex items-center justify-center'>
                    <CustomerFlow />
                  </div>
                </Modal>
              </div>
              {/* 6th member */}
              <div
                className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'
                data-aos='fade-up'
                data-aos-delay='500'
                data-aos-anchor='[data-aos-id-team]'
              >
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>
                    <a
                      href='#0'
                      onClick={(e) => {
                        e.preventDefault();
                        setFutureTrends(true);
                      }}
                    >
                      Future trends
                    </a>
                  </h4>
                </div>
              </div>
              <Modal
                id='future-trends'
                ariaLabel='modal-headline'
                show={futureTrends}
                handleClose={() => setFutureTrends(false)}
              >
                <div className='flex items-center md:justify-center'>
                  <FutureTrends />
                </div>
              </Modal>

              {/* 7th member */}
              <div
                className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'
                data-aos='fade-up'
                data-aos-delay='600'
                data-aos-anchor='[data-aos-id-team]'
              >
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>
                    <a
                      href='#0'
                      onClick={(e) => {
                        e.preventDefault();
                        setChannelOfLeadCost(true);
                      }}
                    >
                      Channels of Lead Cost
                    </a>
                  </h4>
                  <Modal
                    id='channels-of-lead-cost'
                    ariaLabel='modal-headline'
                    show={channelsOfLeadCost}
                    handleClose={() => setChannelOfLeadCost(false)}
                  >
                    <div className='flex items-center md:justify-center md:p-2'>
                      <ChannelsOfLeadCost />
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='max-w-7xl mx-auto px-3 sm:px-6'>
          <div className='py-12 md:py-20 border-t border-gray-800'>
            {/* Section header */}
            <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
              <h2 className='h2 mb-4 text-gradient  bg-gradient-to-r from-green-400 to-blue-500'>
                TARGETED MARKETING & SALES AI-POWERED RECOMMENDATION SAMPLES
              </h2>
            </div>

            {/* Team members */}
            <div
              className='sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3'
              data-aos-id-team
            >
              {/* 1st member */}
              <div className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'>
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>
                    <a
                      href='#0'
                      onClick={(e) => {
                        e.preventDefault();
                        setBoughtTogether(true);
                      }}
                    >
                      Most Frequently Bought Together
                    </a>
                  </h4>
                </div>
                <Modal
                  id='bought-together'
                  ariaLabel='modal-headline'
                  show={boughtTogether}
                  handleClose={() => setBoughtTogether(false)}
                >
                  <div className='flex md:justify-center '>
                    <BoughtTogether />
                  </div>
                </Modal>
              </div>

              {/* 2nd member */}
              <div className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'>
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>
                    <a
                      href='#0'
                      onClick={(e) => {
                        e.preventDefault();
                        setVisitsTogether(true);
                      }}
                    >
                      Most Frequently Visits Together
                    </a>
                  </h4>
                </div>
                <Modal
                  id='visits-together'
                  ariaLabel='modal-headline'
                  show={visitsTogether}
                  handleClose={() => setVisitsTogether(false)}
                >
                  <div className='flex md:justify-center '>
                    <VisitsTogether />
                  </div>
                </Modal>
              </div>

              {/* 3rd member */}
              <div className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'>
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>
                    <a
                      href='#0'
                      onClick={(e) => {
                        e.preventDefault();
                        setEffectiveKeyWords(true);
                      }}
                    >
                      Most Effective Key Words for Marketing Campaigns
                    </a>
                  </h4>
                </div>

                <Modal
                  id='effective-key-words'
                  ariaLabel='modal-headline'
                  show={effectiveKeyWords}
                  handleClose={() => setEffectiveKeyWords(false)}
                >
                  <div className='flex items-center md:justify-center'>
                    <EffectiveKeyWords />
                  </div>
                </Modal>
              </div>

              {/* 4th member */}
              <div className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'>
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>
                    <a
                      href='#0'
                      onClick={(e) => {
                        e.preventDefault();
                        setEffectiveChannels(true);
                      }}
                    >
                      Most Effective Channels for Marketing Campaigns
                    </a>
                  </h4>
                </div>
                <Modal
                  id='effective-key-words'
                  ariaLabel='modal-headline'
                  show={effectiveChannels}
                  handleClose={() => setEffectiveChannels(false)}
                >
                  <div className='flex items-center md:justify-center'>
                    <EffectiveChannels />
                  </div>
                </Modal>
              </div>

              {/* 5th member */}
              <div className='sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3'>
                <div className='flex flex-col items-center border border-gray-800 p-2 hover:bg-green-600'>
                  <h4 className='text-xl font-medium mb-1'>
                    <a
                      href='#0'
                      onClick={(e) => {
                        e.preventDefault();
                        setHiddenPurchasingPatterns(true);
                      }}
                    >
                      Hidden Purchasing Patterns
                    </a>
                  </h4>
                </div>
                <Modal
                  id='effective-key-words'
                  ariaLabel='modal-headline'
                  show={hiddenPurchasingPatterns}
                  handleClose={() => setHiddenPurchasingPatterns(false)}
                >
                  <div className='flex items-center md:justify-center'>
                    <HiddenPurchasingPatterns />
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Samples;
