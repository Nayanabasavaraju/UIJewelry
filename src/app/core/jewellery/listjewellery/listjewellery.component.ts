import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataService } from 'src/app/base/services/jewelry.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm, FormGroup, FormArray, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormsModule, ReactiveFormsModule, RequiredValidator } from '@angular/forms';

declare var $ : any;

@Component({
  selector: 'list-jewellery',
  templateUrl: './listjewellery.component.html',
  styleUrls: ['./listjewellery.component.scss']
})
export class ListJewelleryComponent implements OnInit {

  constructor(public router: Router, private service: dataService, private _fb: FormBuilder,private _snackBar: MatSnackBar) { }
  jtypeArry: any = [];
  jcategoryArry: any = [];
  imageURL: string = '';
  imageType: string = '';
  imageBase64: string = '';
  jewelarArry: any = [];
  isedit: boolean = false;
  disableSavebtn : boolean = true;
  Addjewelrygroup = this._fb.group({
    jtype: ['', Validators.required],
    jcategory: ['', [Validators.required]],
    originalprice: ['', Validators.required],
    quantity: ['', Validators.required],
    sellingprice: ['', Validators.required],
    soldprice: [''],
    remainingQty: [''],
    isActive: [true],
    base64image: [null],
    imageType: [null],
  });
  ngOnInit() {
    this.service.getjewelryType().subscribe((res: any) => {
      this.jtypeArry = res;
    });
    this.service.getjewelryCategory().subscribe((res: any) => {
      this.jcategoryArry = res;
    });
    this.service.getJewellaryDetails().subscribe((res: any) => {
      this.jewelarArry = res;
      //console.log("jsr",JSON.stringify(this.jewelarArry));
    });
  }

  selectFiles(event: any) {
    let canvas: HTMLCanvasElement = document.createElement("canvas");
    const file = event.target.files[0]; //(event.target as HTMLInputElement).files[0];
    this.Addjewelrygroup.patchValue({
      imageType: file.type
    });
    this.imageType = file.type;
    //limit to 2mb size file upload 
    // this.ReadAsBase64(file)
    //   .then(result => {
    //     console.log("resukt",result)
    //     //this.selectedFile = result;
    //   })
    //   .catch(err => console.log(err));

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      let base64 = reader.result as string;
      var arry = base64.split(';base64,');
      this.imageBase64 = arry[1];
      this.Addjewelrygroup.patchValue({
        base64image: arry[1]
      });
      // var img = new Image();      
      // img.src = reader.result as string;

      // img.onload = () => {
      //     var w = img.width;
      //     var h = img.height;
      //     this.ReSizeImg(w,h,img,this.imageType);
      //   }
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  ReSizeImg(width:any,height:any,img:any,imagetype:any ){
    let canvas: HTMLCanvasElement = document.createElement("canvas");
        let ctx: any = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        let MAX_WIDTH: any = 1152;
        let MAX_HEIGHT: any = 864;
        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        } else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx1 = canvas.getContext("2d");
        if(ctx1 != null)
        ctx1.drawImage(img, 0, 0, width, height);
        this.imageURL = canvas.toDataURL("image/png");
  }
  ReadAsBase64(file: any): Promise<any> {
    const reader = new FileReader();
    const fileValue = new Promise((resolve, reject) => {
      reader.addEventListener('load', () => {
        const result = reader.result as String;
        if (!result) reject('Cannot read variable');
        if (result.length * 2 > 2 ** 21) reject('File exceeds the maximum size'); // Note: 2*2**20 = 2**21 
        resolve(reader.result);
      });

      reader.addEventListener('error', event => {
        reject(event);
      });

      reader.readAsDataURL(file);
    });

    return fileValue;
  }

  editFunction(edit: any,val: any) {
    this.isedit = edit;
    this.disableSavebtn = false;
    this.Addjewelrygroup.patchValue({
      originalprice : val.originalPrice,
      quantity :val.quantity,
      sellingprice: val.sellingPrice,
      jtype: val.typeID,
      jcategory: val.categoryID,
      soldprice: val.soldPrice,
      remainingQty: val.remainingqty,
      isActive: val.isActive
    });
    this.imageURL = "data:" + val.imagetype + ";base64," + val.base64Image;
    $('#staticBackdrop').modal('show');
    console.log("edit function",val)
  }

  AddJewellary(val: any) {
    this.disableSavebtn = false;
    this.isedit = val;
    //this.router.navigate(['/jewelry/addjewellery'])
  }
  ModalClose(){
    this.imageURL = '';
  }
  saveJewelryDetails(value: any) {
    this.disableSavebtn = true;
    console.log("save value", value);
    //$('#staticBackdrop').modal('hide');
    
    var savejson = {
      "ID" : 0,
      "TypeID": value.jtype,
      "OriginalPrice": value.originalprice,
      "SellingPrice": value.sellingprice,
      "SoldPrice": value.soldprice,
      "Quantity": value.quantity,
      "Remainingqty": value.remainingQty,
      "CategoryID": value.jcategory,
      "Base64Image": value.base64image,
      "Imagetype": value.imageType,
      "isActive": value.isActive,
      "CreatedBy": localStorage.getItem("userid")
    }
    this.service.PostJewellary(savejson).subscribe(res => {
      console.log("save",res);
      if(res.success)
        this._snackBar.open(res.message,"Success");
      else
        this._snackBar.open("Unable to Add","Failed");
      this.Addjewelrygroup.reset();
      $('#staticBackdrop').modal('hide');
    });
  }
}
