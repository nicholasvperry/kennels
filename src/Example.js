//Pull foreign keys from form to save in json
const locationId = parseInt(animal.locationId)
const customerId = parseInt(animal.customerId)
//needed to save values as integer
animal.locationId = locationId
animal.customerId = customerId

if (locationId === 0) {
  window.alert("Please select a location")
} else {
  //invoke addAnimal passing animal as an argument.
  //once complete, change the url and display the animal list
  addAnimal(animal)
  .then(() => navigate("/animals"))
}

if (employee.name === "") {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please add employee name!',
    position: `center`
  })
} else if (employee.locationId === 0 ) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Please add location!',
    position: `center`
  })
} else {
//invoke addEmployee passing employee as an argument.
//once complete, change the url and display the employee list
const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })         
   
  Toast.fire({
    icon: 'success',
    title: 'You have saved your new employee!'
  })
  addEmployee(employee)
  .then(() => navigate("/employees"))