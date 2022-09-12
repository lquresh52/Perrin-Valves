
function popupMethod(pdfFile){
    var html =  '<div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'
    +'<div class="modal-dialog modal-dialog-centered">'
    +'<div class="modal-content  popup-body">'
    +'<form action="assets\PDFS\"'+pdfFile+'>'
    +'<div class="modal-header">'
    +'<div class="modal-header">'
    +'<h4>Please Enter your Email ID</h4>'
    +'<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'
    +'</div>'
    +'<div class="modal-body">'
    +'<div class="mb-3">'
    +'<label for="recipient-email" class="col-form-label">Email</label>'
    +'<input type="email" class="form-control" id="recipient-email" required>'
    +'</div>'
    +'</div>'
    +'<div class="modal-footer d-flex justify-content-center">'
    +'<a href="assets\PDFS\"'+pdfFile+' target="_blank"> <input type="submit" id="download-button" value="Download" download='+pdfFile+' /> </a>'
    +'</div>'
    +'</form>'
    +'</div>'
    +'</div>'
    +'</div>';
    
    var element = document.getElementById("modalId");
    element.appendChild(html);

    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
        myInput.focus()
    })
}   



  
//    <!-- Modal -->
//       <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div class="modal-dialog modal-dialog-centered">
//           <div class="modal-content  popup-body">
//             <form action="assets\PDFS\PERRIN_2_Wege_KH.pdf">
//               <div class="modal-header">
//                 <h4>Please Enter your Email ID</h4>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div class="modal-body">
                
//                 <div class="mb-3">
//                   <label for="recipient-email" class="col-form-label">Email</label>
//                   <input type="email" class="form-control" id="recipient-email" required>
//                 </div>
                
//               </div>
//               <div class="modal-footer d-flex justify-content-center">
//                 <a href="assets\PDFS\PERRIN_2_Wege_KH.pdf" target="_blank"> <input type="submit" id="download-button" value="Download" download="PERRIN_2_Wege_KH.pdf" /> </a>
//               </div>
//             </form>
//           </div>
          
//         </div>
//       </div>
