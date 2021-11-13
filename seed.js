const Product = require('./models/productModel');

const products = [
    {
        name: 'Disposable Cups',
        image: 'https://images.unsplash.com/photo-1571510228522-bcd6099cea0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGlzcG9zYWJsZSUyMGN1cHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=100',
        category:'disposable',
        weight:'20+',
        phone:'9876543210',
        address:'Sample address'
    },
    {
        name: 'Newspapers',
        image: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwbmV3c3BhcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=100',
        category:'disposable',
        weight:'20+',
        phone:'9876543210',
        address:'Sample address'
    },
    {
        name: 'Books',
        image: 'https://images.unsplash.com/photo-1574432919085-15e4f655360d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwYm9va3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category:'disposable',
        weight:'10-20',
        phone:'9876543210',
        address:'Sample address'
    },
    {
        name: 'Plastic Bottles',
        image: 'https://images.unsplash.com/photo-1531326537431-6197cac3795b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVjeWNsZSUyMGl0ZW1zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=100',
        category:'disposable',
        weight:'10-20',
        phone:'9876543210',
        address:'Sample address'
    },
    {
        name: 'Beer Bottles',
        image: 'https://images.unsplash.com/photo-1620160428336-bd4dd3e90415?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc3MlMjBib3R0bGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=100',
        category:'disposable',
        weight:'10-20',
        phone:'9876543210',
        address:'Sample address'
    },
    {
        name: 'Tin',
        image: 'https://images.unsplash.com/photo-1561924018-4f213bdc7364?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fuc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=100',
        category:'disposable',
        weight:'10-20',
        phone:'9876543210',
        address:'Sample address'
    },
    {
        name: 'Juice Cans',
        image: 'https://images.unsplash.com/photo-1626320290598-03656e931a31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=100',
        category:'disposable',
        weight:'10-20',
        phone:'9876543210',
        address:'Sample address'
    },
    {
        name: 'Beer Bottles',
        image: 'https://images.unsplash.com/photo-1620160428336-bd4dd3e90415?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc3MlMjBib3R0bGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=100',
        category:'disposable',
        weight:'10-20',
        phone:'9876543210',
        address:'Sample address'
    },
    {
        name: 'Plastic Waste',
        image: 'https://images.unsplash.com/photo-1576037728058-ab2c538ac8d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhc3RpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=100',
        category:'disposable',
        weight:'10-20',
        phone:'9876543210',
        address:'Sample address'
    },
    {
        name: 'Iron Rods',
        image: 'https://media.istockphoto.com/photos/-picture-id471378905?b=1&k=20&m=471378905&s=170667a&w=0&h=ncGjcPIEK5OPSrPP3U2MOVSBIwea3g9Aa2qJsbE2f9c=',
        category:'disposable',
        weight:'10-20',
        phone:'9876543210',
        address:'Sample address'
    },
]

const seedDB= async()=>{
 await Product.deleteMany({});
 await Product.insertMany(products);
 console.log('DB Seeded');
}

module.exports=seedDB;