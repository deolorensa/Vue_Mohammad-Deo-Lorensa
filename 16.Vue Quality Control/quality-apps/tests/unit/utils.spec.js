import {penjumlahan} from '@/utils/'
import {pengurangan} from '@/utils/'
import {pembagian} from '@/utils/'
import {perkalian} from '@/utils/'
import {rataRata} from '@/utils/'
import {sisaBagi} from '@/utils/'
import {luasPersegi} from '@/utils/'
import {luasLingkaran} from '@/utils/'
import {luasKubus} from '@/utils/'
import {volumeKubus} from '@/utils/'

describe('Test penjumlahan dari utils', () => {
  it('Melakukan penjumlahan bilangan positif', () => {
    expect(penjumlahan(2, 4)).toBe(6)
  });
  it('Melakukan penjumlahan bilangan positif dan negatif', () => {
    expect(penjumlahan(2, -2)).toBe(0)
  });
  it('Melakukan penjumlahan bilangan positif dan negatif', () => {
    expect(penjumlahan(2, -4)).toBe(-2)
  });
});

describe('Test pengurangan dari utils', () => {
  it('Melakukan pengurangan bilangan positif', () => {
    expect(pengurangan(5, 4)).toBe(1)
  });
  it('Melakukan pengurangan bilangan positif dan negatif', () => {
    expect(pengurangan(2, -2)).toBe(4)
  });
  it('Melakukan pengurangan bilangan positif dan negatif', () => {
    expect(pengurangan(-2, -2)).toBe(0)
  });
});

describe('Test pembagian dari utils', () => {
  it('Melakukan pembagian bilangan positif', () => {
    expect(pembagian(5, 5)).toBe(1)
  });
  it('Melakukan pembagian bilangan positif dan negatif', () => {
    expect(pembagian(10, -2)).toBe(-5)
  });
  it('Melakukan pembagian bilangan positif dan negatif', () => {
    expect(pembagian(10, -5)).toBe(-2)
  });
});

describe('Test perkalian dari utils', () => {
  it('Melakukan perkalian bilangan positif', () => {
    expect(perkalian(5, 1)).toBe(5)
  });
  it('Melakukan perkalian bilangan positif dan negatif', () => {
    expect(perkalian(10, -2)).toBe(-20)
  });
  it('Melakukan perkalian bilangan positif dan negatif', () => {
    expect(perkalian(-1, -5)).toBe(5)
  });
});

describe('Test rata-rata dari utils', () => {
  it('Melakukan rata-rata 5 bilangan', () => {
    expect(rataRata(5, 5, 5, 5, 5)).toBe(5)
  });
  it('Melakukan rata-rata 5 bilangan', () => {
    expect(rataRata(10, 2, 4, 3, 1)).toBe(4)
  });
  it('Melakukan rata-rata 5 bilangan', () => {
    expect(rataRata(1, 5, 1, 2, 1 )).toBe(2)
  });
});

describe('Test sisaBagi dari utils', () => {
  it('Melakukan sisaBagi bilangan dengan memasukkan 2 bilangan', () => {
    expect(sisaBagi(5, 2)).toBe(1)
  });
  it('Melakukan sisaBagi bilangan dengan memasukkan 2 bilangan', () => {
    expect(sisaBagi(10, 3)).toBe(1)
  });
  it('Melakukan sisaBagi bilangan dengan memasukkan 2 bilangan', () => {
    expect(sisaBagi(15, 4)).toBe(3)
  });
});

describe('Test luasPersegi dari utils', () => {
  it('Melakukan luasPersegi bilangan positif', () => {
    expect(luasPersegi(5, 1)).toBe(5)
  });
  it('Melakukan luasPersegi bilangan positif dan negatif', () => {
    expect(luasPersegi(10, -2)).toBe(-20)
  });
  it('Melakukan luasPersegi bilangan positif dan negatif', () => {
    expect(luasPersegi(-1, -5)).toBe(5)
  });
});

describe('Test luasLingkaran dari utils', () => {
  it('Melakukan luasLingkaran dengan memasukkan jari"', () => {
    expect(luasLingkaran(10)).toBe(314)
  });
  it('Melakukan luasLingkaran dengan memasukkan jari', () => {
    expect(luasLingkaran(5)).toBe(78.5)
  });
  it('Melakukan luasLingkaran dengan memasukkan jari', () => {
    expect(luasLingkaran(3)).toBe(28.259999999999998)
  });
});

describe('Test luasKubus dari utils', () => {
  it('Melakukan luasKubus dengan memasukkan sisi kubus"', () => {
    expect(luasKubus(1)).toBe(6)
  });
  it('Melakukan luasKubus dengan memasukkan sisi kubus', () => {
    expect(luasKubus(3)).toBe(54)
  });
  it('Melakukan luasKubus dengan memasukkan sisi kubus', () => {
    expect(luasKubus(5)).toBe(150)
  });
});

describe('Test volumeKubus dari utils', () => {
  it('Melakukan volumeKubus dengan memasukkan sisi kubus"', () => {
    expect(volumeKubus(10)).toBe(1000)
  });
  it('Melakukan volumeKubus dengan memasukkan sisi kubus', () => {
    expect(volumeKubus(5)).toBe(125)
  });
  it('Melakukan volumeKubus dengan memasukkan sisi kubus', () => {
    expect(volumeKubus(1)).toBe(1)
  });
});