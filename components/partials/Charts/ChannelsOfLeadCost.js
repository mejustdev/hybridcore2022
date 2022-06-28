import React from 'react';

function ChannelsOfLeadCost() {
  return (
    <>
      <table className='table-auto text-black border border-blue-800 mb-2 text-center'>
        <thead>
          <tr>
            <th className='border border-blue-800'></th>
            <th className='border border-blue-800 bg-blue-500 text-white'>
              Media Placement/ Distribution
            </th>
            <th className='border border-blue-800 bg-blue-500 text-white'>List(s)</th>
            <th className='border border-blue-800 bg-blue-500 text-white'>Labor/Agency</th>
            <th className='border border-blue-800 bg-blue-500 text-white'>Campaign Creative</th>
            <th className='border border-blue-800 bg-blue-500 text-white'>Incentive(s)</th>
            <th className='border border-blue-800 bg-blue-500 text-white'>Other</th>
          </tr>
        </thead>
        <tbody className=' border border-blue-800'>
          <tr>
            <td className='border border-blue-800'>Company X</td>
            <td className='border border-blue-800'>853.25</td>
            <td className='border border-blue-800'>319.082</td>
            <td className='border border-blue-800'>120</td>
            <td className='border border-blue-800'>21.765</td>
            <td className='border border-blue-800'>1,500,000</td>
            <td className='border border-blue-800'>43.064</td>
          </tr>
          <tr>
            <td className='border border-blue-800'>Company Y</td>
            <td className='border border-blue-800'>743.12</td>
            <td className='border border-blue-800'>420.04</td>
            <td className='border border-blue-800'>126.234</td>
            <td className='border border-blue-800'>34.123</td>
            <td className='border border-blue-800'>1,200,350</td>
            <td className='border border-blue-800'>35.23</td>
          </tr>
          <tr>
            <td className='border border-blue-800'>Company Z</td>
            <td className='border border-blue-800'>910.345</td>
            <td className='border border-blue-800'>400.234</td>
            <td className='border border-blue-800'>134</td>
            <td className='border border-blue-800'>26.567</td>
            <td className='border border-blue-800'>1,450,900</td>
            <td className='border border-blue-800'>42.45</td>
          </tr>
        </tbody>
      </table>

      <table className='text-black border border-blue-800 text-center'>
        <thead>
          <tr>
            <th className='border border-blue-800 bg-blue-500 text-white'>Lead Provider</th>
            <th className='border border-blue-800  bg-blue-500 text-white'>Lead Count-Total</th>
            <th className='border border-blue-800  bg-blue-500 text-white'>Race-Bad</th>
            <th className='border border-blue-800  bg-blue-500 text-white'>Rate-Converted</th>
            <th className='border border-blue-800  bg-blue-500 text-white'>Lead Cost</th>
            <th className='border border-blue-800  bg-blue-500 text-white'>Lead Cost Avarage</th>
            <th className='border border-blue-800  bg-blue-500 text-white'>
              Lead Cost Per Coversion
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-blue-800'>A</td>
            <td className='border border-blue-800'>2, 954</td>
            <td className='border border-blue-800'>13.10%</td>
            <td className='border border-blue-800'>4.40%</td>
            <td className='border border-blue-800'>45,960.00</td>
            <td className='border border-blue-800'>18.11</td>
            <td className='border border-blue-800'>450.59</td>
          </tr>
          <tr>
            <td className='border border-blue-800'>B</td>
            <td className='border border-blue-800'>4.275</td>
            <td className='border border-blue-800'>11.90%</td>
            <td className='border border-blue-800'>5.20%</td>
            <td className='border border-blue-800'>47,020.00</td>
            <td className='border border-blue-800'>12.28</td>
            <td className='border border-blue-800'>265.65</td>
          </tr>
          <tr>
            <td className='border border-blue-800'>C</td>
            <td className='border border-blue-800'>2.055</td>
            <td className='border border-blue-800'>11.80%</td>
            <td className='border border-blue-800'>6.40%</td>
            <td className='border border-blue-800'>31,980.00</td>
            <td className='border border-blue-800'>18.13</td>
            <td className='border border-blue-800'>313.53</td>
          </tr>
          <tr>
            <td className='border border-blue-800'>D</td>
            <td className='border border-blue-800'>2.28</td>
            <td className='border border-blue-800'>16.20%</td>
            <td className='border border-blue-800'>6.40%</td>
            <td className='border border-blue-800'>35,520.00</td>
            <td className='border border-blue-800'>17.65</td>
            <td className='border border-blue-800'>311.58</td>
          </tr>
          <tr>
            <td className='border border-blue-800'>E</td>
            <td className='border border-blue-800'>1.791</td>
            <td className='border border-blue-800'>12.60%</td>
            <td className='border border-blue-800'>5.00%</td>
            <td className='border border-blue-800'>27,720.00</td>
            <td className='border border-blue-800'>16.62</td>
            <td className='border border-blue-800'>401.74</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ChannelsOfLeadCost;
