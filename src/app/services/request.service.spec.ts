import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Treatment } from '../interfaces/treatment';
import { RequestService } from './request.service';

describe('RequestService', () => {
  let service: RequestService;

  let testData: Treatment[] = [
    {
      treatmentCode: 'AAA131',
      patient: 'Lakshmi Sonja',
      treatmentDate: '2021-08-31T07:19:53',
    },
    {
      treatmentCode: 'AA13134BA',
      patient: 'Judith Militsa',
      treatmentDate: '2021-08-05T15:19:53',
    },
    {
      treatmentCode: 'A12B34C1CC',
      patient: 'Lakshmi Sonja',
      treatmentDate: '2021-08-01T18:19:53',
    },
    {
      treatmentCode: 'A12B12AAA',
      patient: 'Chikondi Ieuan',
      treatmentDate: '2021-07-31T07:19:53',
    },
    {
      treatmentCode: 'AAB123BB',
      patient: 'Zarina Raganhildis',
      treatmentDate: '2020-08-31T07:19:53',
    },
    {
      treatmentCode: 'ABB1121BA',
      patient: 'Lawrence Akiko',
      treatmentDate: '2021-06-31T07:19:53',
    },
    {
      treatmentCode: '222BBAA',
      patient: 'Lawrence Akiko',
      treatmentDate: '2021-06-31T09:19:53',
    },
    {
      treatmentCode: 'QW-12AAB22',
      patient: 'Perdita Chedomir',
      treatmentDate: '2021-04-29T07:19:53',
    },
    {
      treatmentCode: '23333AA',
      patient: 'Lakshmi Sonja',
      treatmentDate: '2021-01-31T07:19:53',
    },
    {
      treatmentCode: '122AQP2',
      patient: 'Valkyrie Chris',
      treatmentDate: '2020-08-31T07:19:53',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RequestService);
    TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getObservableValue should return value from observable', (done: DoneFn) => {
    service.getTeatments({}).subscribe((value) => {
      expect(value).toEqual(testData);
      done();
    });
  });
});
