import { DataTypes, Factory } from "../model/factory";

describe('Api Data', () => {

    beforeEach(() => {

    });

    for (let item in DataTypes) {
        let data = Factory.createNew(item);

        it (item + ": should return identifier without throwing error", () => {
            expect(data.getIdentifier.bind(data)).not.toThrow();
        });

        it (item + ": should set identifier", () => {
            let newId = "test";
            data.setIdentifier(newId);
            expect(data.getIdentifier()).toBe(newId);
        });

        it (item + ": should deserialize without error", () => {
            expect(data.deserialize.bind(data, "")).not.toThrow();
        });

        it (item + ": should serialize without error", () => {
            expect(data.serialize.bind(data)).not.toThrow();
        });
      }
  });