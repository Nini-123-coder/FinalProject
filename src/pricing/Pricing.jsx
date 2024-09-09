import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import './Pricing.css';

function Pricing({ property1 }) {
  // Reducer function to manage state
  function reducer(state, action) {
    switch (action) {
      case 'click':
        return {
          ...state,
          property1: 'two',
        };
      case 'click_127':
        return {
          ...state,
          property1: 'one',
        };
      default:
        return state;
    }
  }

  // Initializing state with useReducer
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || 'one',
  });

  return (
    <div className="pricingContainer">
      <div className="Affordablewrapper">
        <section className="Affordablewords">
          <h1>Your Affordable Payroll <br /> and HR Solution</h1>
          <p>Affordable solutions for Nigerian<br /> businesses of all sizes.</p>
        </section>
        <section className="Affordableimge">
          <img src="/src/assets/Finding brilliant ideas 1.png" alt="Payroll HR Solutions" />
        </section>
      </div>

      <div className="planHeader">
        <h1>Choose your right plan!</h1>
        <p>
          Select from best plans, ensuring a perfect match. Need more or less?
          <br />
          Customize your subscription for an effective and efficient experience.
        </p>
      </div>

      <div className={`price ${state.property1}`}>
        <div className="tabs">
          <div className="tab-item" onClick={() => dispatch('click_127')}>
            <div className="text-wrapper">Monthly</div>
          </div>
          <div className="div-wrapper" onClick={() => dispatch('click')}>
            <div className="div">Quarterly</div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="frame">
          {/* Basic Plan */}
          <div className="card-header">
            <div className="card-title">
              <div className="text-wrapper-2">Basic</div>
            </div>
            <div className="card-description">
              <p className="p">Small businesses with limited payroll and HR needs.</p>
              <div className="frame-2">
                <div className="text-wrapper-3">₦</div>
                <div className="div-2">0</div>
              </div>
              <button className="button">
                <div className="text-wrapper-4">Try for free</div>
              </button>
              <p className="core-payroll">
                Core payroll processing.
                <br />
                Basic Employee management.
                <br />
                Suitable for small businesses with limited needs.
              </p>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="card-header">
            <div className="card-title">
              <div className="text-wrapper-2">Premium</div>
            </div>
            <div className="card-description">
              <p className="p">Growing businesses with more complex payroll and HR requirements.</p>
              <div className="frame-2">
                <div className="text-wrapper-3">₦</div>
                <div className="div-2">
                  {state.property1 === 'one' ? '4,999' : '4,499'}
                </div>
              </div>
              <button className="button">
                <div className="text-wrapper-4">Get Started</div>
              </button>
              <p className="core-payroll">
                Core payroll processing.
                <br />
                Employee management.
                <br />
                Advanced reporting.
                <br />
                Integrations.
                <br />
                Suitable for medium-sized businesses with growing needs.
              </p>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="card-header">
            <div className="card-title">
              <div className="text-wrapper-2">Enterprise</div>
            </div>
            <div className="card-description">
              <p className="p">Large businesses with complex payroll and HR processes.</p>
              <div className="frame-2">
                <div className="text-wrapper-3">₦</div>
                <div className="div-2">
                  {state.property1 === 'one' ? '9,999' : '8,999'}
                </div>
              </div>
              <button className="button">
                <div className="text-wrapper-4">Get Started</div>
              </button>
              <p className="core-payroll">
                Core payroll processing.
                <br />
                Employee management.
                <br />
                Advanced reporting.
                <br />
                Custom Integrations.
                <br />
                Dedicated support.
                <br />
                Suitable for large businesses with complex requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='ChoseWorkitWrapper'>
        <h1>Why Choose WorkET?</h1>
        <ul>
          <li>Affordable pricing: <span>Pay only for what you need.</span></li>
          <li>Easy to use: <span> Intuitive interface for hassle-free payroll<br/>
              and employee management.</span></li>
          <li>Time-saving: <span>Automate tasks and efficient processes.</span></li>
          <li>Reliable: <span>Trust our secure and efficient platform.</span></li>

        </ul>


      </div>
      <div className='MoreInformationWrapper'>
        <h1>Need more information?<br/> Contact Us:</h1>
        <p>Email: admin@worket.com<br/>
           Phone Number: +234 816 228 2957<br/>
           Address: 153 muyibi Street, Olodi-apapa, Nigeria</p>

      </div>

      <div className='NoteWrapper'>
        <h1>Note:</h1>
        <p>Prices are subject to change.<br/>
        Please contact us for the most up-to-date pricing information</p>
      </div>
    </div>
  );
}

// PropTypes validation
Pricing.propTypes = {
  property1: PropTypes.oneOf(['two', 'one']),
};

export default Pricing;
