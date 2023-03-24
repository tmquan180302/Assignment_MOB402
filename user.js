module.exports = class Student {
    constructor(ten, msv, img) {
        this.ten = ten;;
        this.msv = msv;
        this.img = img;
    }
    getInfor = function () {
        return `${this.ten} - ${this.msv}`
    }
    getDiemTB = function () {
        // truy cập mongDB để lấy dữ liệu
        var diemTB = 6 + Math.floor(Math.random() * 5);
        return diemTB;
    }
}