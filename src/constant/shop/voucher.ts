
export interface Voucher {
    id: string;
    name: string;
    code: string;
    discount: number;
    unit: 'percent' | 'amount';
    type: 'shipping' | 'teacher';
}

export const systemVoucher: Voucher[] = [
    {
        id: '1',
        name: 'Giảm giá 10%',
        code: 'KDCEDUCATION10',
        discount: 10,
        unit: 'percent',
        type: 'teacher',
    },
    {
        id: '2',
        name: 'Giảm giá 20%',
        code: 'KDCEDUCATION20',
        discount: 20,
        unit: 'percent',
        type: 'teacher',
    },
    {
        id: '3',
        name: 'Giảm phí vận chuyển 15K',
        code: 'KDCFREESHIP15',
        discount: 15000,
        unit: 'amount',
        type: 'shipping',
    },
    {
        id: '4',
        name: 'Giảm phí vận chuyển 20K',
        code: 'KDCFREESHIP20',
        discount: 20000,
        unit: 'amount',
        type: 'shipping',
    },
    {
        id: '5',
        name: 'Giảm phí vận chuyển 25K',
        code: 'KDCFREESHIP25',
        discount: 25000,
        unit: 'amount',
        type: 'shipping',
    },
]