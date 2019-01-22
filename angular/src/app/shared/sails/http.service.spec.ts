import { HttpService } from "./http.service";
import { TestBed } from "@angular/core/testing";
import { ApiData } from "../data/api-data";
import { Vendor } from "../model/vendor";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { of } from "rxjs";


describe('Http Service', () => {

  let httpService: HttpService;
  let serviceSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'patch', 'delete']);

    TestBed.configureTestingModule({

      providers: [
        HttpService,
        { provide: HttpClient, useValue: spy}
      ]

      
    });
    httpService = TestBed.get(HttpService);
    serviceSpy = TestBed.get(HttpClient);
  });

  it('should return expected data', () => {
    const expectedData : ApiData[] = [new Vendor(), new Vendor(), new Vendor()];
    serviceSpy.get.and.returnValue(of(expectedData));

    httpService.get("").subscribe(
      res => expect(res).toEqual(expectedData, 'expected data'));
  });

  it('should return an error when the server returns 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    serviceSpy.get.and.returnValue(of(errorResponse));

    httpService.get("").subscribe(
      ress => fail('expected an error'),
      error => expect(error.message).toContain("test 404 error")
    );
  });

});