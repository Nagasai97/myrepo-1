import {Component} from 'react';

const Realm = require('realm');
// Define your models and their properties
const JsonDataSchema = {
    name: 'JsonData',
    properties: {
        Items:'string',
        Date: 'date'
    }
}

const Schema = [JsonDataSchema];
export default class schema extends Component {
static getJsonData() {
    return Realm.open({ schema: Schema,  schemaVersion: 2})
        .then(realm => {
            console.log("get realm recent chats");
            return realm.objects('JsonData')
        }).catch(error => {
            console.error(`Error when get chats: ${error}`);
        });
}

static addJsonData(records) {
    console.log('addJsonData in realm');
    try {
        const realm = new Realm({
            schema: Schema,
            schemaVersion: 2
        });
        try {
            realm.write(() => {
                let data = realm.objects('JsonData')
                let presentDate = new Date();
                if(data.length < 1){
                    realm.create('JsonData', {
                        Items: records,
                        Date: presentDate
                    });
                }else{
                    data[0].Items = records;
                    data[0].Date = presentDate
                }
                return true;
        });

        } catch (error) {
        console.error(error);
        }
    } catch (error) {
        console.error(error);
    }
}

}
