let products = [
    {
        id: 1,
        name: 'T-SHIRT GRAPHIQUE',
        price: 19.99,
        quantity: 50,
        category: 'Vêtement',
    },
    {
        id: 2,
        name: 'Acer Nitro 5',
        price: 1299,
        quantity: 5,
        category: 'Pc gaming',
    },
    {
        id: 3,
        name: 'Chargeur Type C Rapide Prise USB Secteur Universel',
        price: 13.99,
        quantity: 80,
        category: 'Chargeur de téléphone',
    }

]

const app = Vue.createApp({
    data() {
        return {
            inventory: products,
            isVisible: false,
            editedProduct: {},
        }
    },

    methods: {
        deleteProduct(index){
            const confirmDel = window.confirm('êtes vous sur de vouloir supprimer ce produit de la liste?');
            if(confirmDel){
                this.inventory.splice(index, 1);
            }
        },
        openModal(product, index){
            this.editedProduct = {...product};
            this.editedProductIndex = index;
            this.isVisible = true;
        },
        closeModal(){
            this.isVisible = false;
        },
        saveChanges(){
            if(this.editedProduct.name === undefined || this.editedProduct.price === undefined || this.editedProduct.quantity === undefined || this.editedProduct.category === undefined){
                alert('veuillez remplir tous les champs');
                return;
            }
            const confirmEdit = window.confirm('êtes vous sur de vouloir modifier ce produit?');
            if(confirmEdit){
            this.inventory[this.editedProductIndex] = {...this.editedProduct};
            this.isVisible = false;
        }
        },
        addProduct(){
            const newProduct = {
                id: this.inventory.length + 1,
                name: document.getElementById('name').value,
                price: parseInt(document.getElementById('price').value),
                quantity: parseInt(document.getElementById('quantity').value),
                category: document.getElementById('category').value,
            }
            this.inventory.push(newProduct);
        },
    },
})
app.mount('#app')