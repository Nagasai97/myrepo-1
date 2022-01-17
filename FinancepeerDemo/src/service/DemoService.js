import React, { Component } from 'react';

export default class DemoService extends Component {
    static imagePath = null;
    static async getData() {
        console.log('getData : ');
        try {
            let endpoint = 'https://acc57cb0-de3d-4089-8c98-09d36474ea9e.mock.pstmn.io/fpdemo'
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            const json = await response.json();
            return json;
        } catch (error) {
            console.error(`Error while getting messages: ${error}`);
        }
    }
}