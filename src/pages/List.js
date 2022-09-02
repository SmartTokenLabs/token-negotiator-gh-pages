import React from 'react'
import ExampleTile from "./../components/ExampleTile";
import examples from '../examples';

function List() {

    const listItems = Object.keys(examples).map((d, idx) => <ExampleTile key={d} urlKey={d} example={examples[d]} />);

    return (
        <div className="pageWrapper contentContainer">
            <h1 className="listHeading">Token Negotiator Examples</h1>
            <p className='textCenter'>This website has been developed to showcase an off-chain capability of Token Negotiator</p>
            <div className="listContainer">
                {listItems}
            </div>

            <div style={{ border: '0px solid #e4e5e5', display: 'flex', width: '87%', margin: '0 auto' }}>
                <div style={{ border: '0px solid #e4e5e5', width: '100%', margin: '11px' }}>
                    <div className='textCenter'>
                        <h3>Getting Started:</h3>
                    </div>
                </div>
            </div>
            
            <div className='flexWrap' style={{ border: '1px solid #e4e5e5', display: 'flex', width: '87%', margin: '14px auto' }}>
                <div style={{ borderRight: '1px solid #e4e5e5', width: '100%' }}>
                    <div className='textCenter' style={{ padding: '24px' }}>
                        <p><b>#1</b></p>
                        <p>
                            Create a demo ticket attestation from the Devcon Ticket Issuer website.
                        </p>
                    </div>
                </div>
                <div style={{ borderRight: '1px solid #e4e5e5', width: '100%' }}>
                    <div className='textCenter' style={{ padding: '24px' }}>
                        <p><b>#2</b></p>
                        <p>
                            Visit the Hotel Bogota Active website, open the Token Negotiator and apply your ticket for a discount.
                        </p>
                    </div>
                </div>
                <div style={{ border: '0px solid #e4e5e5', width: '100%' }}>
                    <div className='textCenter' style={{ padding: '24px' }}>
                        <p><b>#3</b></p>
                        <p>
                            Complete the demo booking proccess by signing with a chosen web3 wallet and confirming your email address.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
