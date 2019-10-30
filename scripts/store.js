import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
  return items.find(a => a.id === id);
}

function addItem(name) {
  try{
    item.validateName(name);
    let newItem = item.create(name);
    this.items.push(newItem);
  }
  catch(e){
    console.log(`name can not be blank ${e.message}`);
  }
}

function findAndToggleChecked(id) {
  let target = this.findById(id);
  target.checked = !target.checked;
  console.log(target);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    let updatedItem = this.findById(id);
    updatedItem.name = newName;
  }
  catch(e) {
    console.log(`Cannot update name: ${e.message}`);
  }
}

function findAndDelete(id) {
  const ind = this.items.findIndex(a => a.id === id);
  this.items.splice(ind, 1);
}


export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  toggleCheckedFilter,
  findAndUpdateName,
  findAndDelete
};

