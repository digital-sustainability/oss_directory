import { Factory } from './factory';
import { DataTypes } from "./types";

describe('Factory', () => {

  beforeEach(() => {
   
  });

  for (let item in DataTypes) {
		it ('should create: ' + item, () => {
			let result = Factory.create(item);
			expect(result).toBeTruthy();
		});
	}
	
	it ('should throw if false name is provided', () => {
		expect(Factory.create.bind(null, "test")).toThrow();
	})
});