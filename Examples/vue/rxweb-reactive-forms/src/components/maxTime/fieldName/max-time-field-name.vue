
<template>
  <div class="col-lg-12">
     <form>
       <div class="form-group">
        <label>Closing Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.closingTime" type="text" name="name" />
        <div v-if="attandanceDetailFormGroup.controls.closingTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.closingTime.errors.maxTime.message}}<br/></small>	
       </div>
      </div>  
    <div class="form-group">
        <label>Exit Time</label>
        <input id="name" class="form-control" v-model="attandanceDetailFormGroup.props.exitTime" type="text" name="name" />
          <small class="form-text text-muted">Shows Custom Validation Message.<br/></small>
       <div v-if="attandanceDetailFormGroup.controls.exitTime.errors">
         <small class="form-text text-danger">{{attandanceDetailFormGroup.controls.exitTime.errors.maxTime.message}}<br/></small>	
       </div>
      </div>  
       <button class="btn btn-primary">Submit</button>
     </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { required,RxFormBuilder,IFormGroup } from "@rxweb/reactive-forms"
import { AttandanceDetail } from './attandanceDetail.model';

@Component
export default class MaxTimeFieldNameComponent extends Vue {
 attandanceDetailFormGroup: IFormGroup<AttandanceDetail>;

 formBuilder: RxFormBuilder = new RxFormBuilder();

  constructor() {
    super();
    this.attandanceDetailFormGroup = this.formBuilder.formGroup(AttandanceDetail) as IFormGroup<AttandanceDetail>;
   }
}
</script> 
