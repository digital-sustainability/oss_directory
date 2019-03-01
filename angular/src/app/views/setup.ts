import { ActivatedRoute} from '@angular/router';
import { DataService } from '../shared/data/data.service';

/**
 * Setup class for views
 * Helps generalizing the setup process of each data related view
 */
export abstract class Setup {

  protected abstract route : ActivatedRoute;
  protected abstract provider : DataService;

  constructor() { }

  public readType() {
    return this.provider.type(this.route);
  }

  public requestData() {
    //here we can handle any errors and redirect to other views or try to solve the error 

    return this.provider.getData(this.route);
  }

}
