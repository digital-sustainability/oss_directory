import { Factory } from "../model/factory";
import { Vendor } from "../model/vendor";
import { DataTypes } from "../model/types";
import { Status } from "../model/status";
import { Client } from "../model/client";
import { vendor_data, client_data, address_data } from "./api-data.spec.res";

describe('Api Data', () => {
    
  
    
    beforeEach(() => {});

    for (let item in DataTypes) {
        let data = Factory.create(item);

        it (item + ": should return identifier without throwing error", () => {
            expect(data.identifier).toBe(Status.Empty);
        });

        it (item + ": should set identifier", () => {
            let newId = "404";
            data.identifier = newId;
            expect(data.identifier).toBe(newId);
        });

        it (item + ": should deserialize without error", () => {
            expect(data.deserialize.bind(data, "")).not.toThrow();
        });
      }

    it ("Vendor should be able to deserialize", () => {
        let vendor = new Vendor(Factory);
        expect(vendor.deserialize.bind(vendor, (vendor_data['data']['Vendor'][0]))).not.toThrow();
    });

    it ("Client should be able to deserialize", () => {
      let client = new Client(Factory);
      expect(client.deserialize.bind(client_data['data']['Client'][0])).not.toThrow();
    })
    
  });