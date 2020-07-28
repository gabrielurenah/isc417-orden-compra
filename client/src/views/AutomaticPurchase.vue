<template>
  <div class="col-md-8 mx-auto">
    <div class="card my-5">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-8 d-flex">
            <h3 class="align-self-center">Orden compra</h3>
          </div>
          <div class="col-sm-4">
            <b-form-group label="Fecha requerida:" label-for="input-fecha">
              <b-form-input id="input-fecha" type="date" v-model="fecha"></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <b-form-group label="Artículo:" label-for="input-articulo">
              <b-form-select
                id="input-articulo"
                v-model="articulo"
                :state="state.articulo"
                :options="articulos"
              ></b-form-select>
            </b-form-group>
          </div>
          <div class="col-sm-2">
            <b-form-group label="Cantidad:" label-for="input-cantidad">
              <b-form-input
                id="input-cantidad"
                type="number"
                :state="state.cantidad"
                v-model="cantidad"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-sm-2 d-flex">
            <b-button
              class="align-self-end mb-3"
              block
              variant="primary"
              v-on:click="addToCompras"
            >Añadir</b-button>
          </div>
        </div>
        <hr class="mt-1 mb-3" />
        <div class="row">
          <h4 class="mx-auto lead" v-if="!compras.length">No hay articulos en la orden</h4>
          <b-table striped :items="compras"></b-table>
        </div>
        <div class="row">
          <b-button
            v-if="compras.length"
            class="mx-auto px-5 mt-3"
            variant="primary"
            v-on:click="create"
          >Confirmar orden</b-button>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <h3 class="text-center" v-if="!ordenes.length">No hay ordenes abiertas</h3>
      <b-table striped :items="ordenes"></b-table>
    </div>
  </div>
</template>

<script>
import { getArticles } from '../api/articles';
import {
  getPurchaseOrders,
  createPurchaseOrder,
  automaticOrder
} from '../api/purchaseOrder';

export default {
  name: 'AutomaticPurchase',
  data() {
    return {
      compras: [],
      fecha: new Date().toISOString().split('T')[0],
      articulo: '',
      cantidad: 1,
      monto: 0,
      articulos: [],
      ordenes: [],
      state: {
        articulo: null,
        cantidad: null
      }
    };
  },
  beforeMount() {
    getArticles()
      .then(({ data }) => {
        data.map(({ codigo, tipo, nombre, precioUnidad }) => {
          this.articulos.push({
            value: codigo,
            text: `${codigo} - ${nombre}`
          });
        });
      })
      .catch(err => console.error('ERRRRR => ', err));

    getPurchaseOrders()
      .then(({ data }) => data.map(orden => this.ordenes.push(orden)))
      .catch(err => console.error('ERRRRR => ', err));
  },
  methods: {
    addToCompras() {
      if (this.articulo === {}) {
        this.state.articulo = false;
        return;
      } else this.state.articulo = true;

      if (this.cantidad <= 0) {
        this.state.cantidad = false;
        return;
      }

      this.compras.push({
        articulo: this.articulo,
        cantidad: this.cantidad
      });

      this.articulo = '';
      this.state.articulo = null;
      this.cantidad = 1;
      this.state.cantidad = null;
    },
    create() {
      automaticOrder({
        fechaOrden: this.fecha,
        articulos: this.compras
      })
        .then(() => location.reload())
        .catch(err => console.error(err));
    }
  }
};
</script>
