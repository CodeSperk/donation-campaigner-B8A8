export const saveToLocalStorage= (data)=> {
  const savedData = JSON.parse(localStorage.getItem("donation")) || [];

  const isExist = savedData.find((item)=>item.id === data.id);

  if(!isExist){
    savedData.push(data);
    localStorage.setItem("donation", JSON.stringify(savedData));
    alert("added successfully");
  }else{
    alert("Already found data");
  }
} 