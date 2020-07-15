<template>
  <div class="col-md-8 mx-auto">
    <div class="card my-5">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <b-form-group label="Almacen:" label-for="input-almacen">
              <b-form-select
                id="input-almacen"
                v-model="almacen"
                :options="almacenes"
              ></b-form-select>
            </b-form-group>
          </div>
          <div class="col">
            <b-form-group label="Artículo:" label-for="input-articulo">
              <b-form-select
                id="input-articulo"
                v-model="articulo"
                :options="articulos"
              ></b-form-select>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <b-form-group label="Tipo de Movimiento:" label-for="input-tipo">
              <b-form-select
                id="input-tipo"
                v-model="tipo"
                :options="tipos"
              ></b-form-select>
            </b-form-group>
          </div>
          <div class="col">
            <b-form-group label="Cantidad:" label-for="input-cantidad">
              <b-form-input
                id="input-cantidad"
                type="number"
                v-model="cantidad"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <b-button class="mx-auto px-5 mt-3" variant="primary"
            >Registrar movimiento</b-button
          >
        </div>
      </div>
    </div>

    <div class="mt-3">
      <h3 class="text-center" v-if="!movimientos.length">
        No hay movimientos
      </h3>
      <b-table striped :items="movimientos"></b-table>
    </div>
  </div>
</template>

<script>
import { getArticles } from '../api/articles';
import { getInventoryMovements } from '../api/movements';

export default {
  name: 'Movements',
  data() {
    return {
      almacen: null,
      articulo: null,
      tipo: null,
      cantidad: 0,
      almacenes: [
        { value: 'ALM-001', text: 'ALM-001' },
        { value: 'ALM-002', text: 'ALM-002' },
        { value: 'ALM-003', text: 'ALM-003' }
      ],
      articulos: [],
      tipos: [
        { value: 'Entrada', text: 'Entrada' },
        { value: 'Salida', text: 'Salida' }
      ],
      movimientos: []
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

    getInventoryMovements()
      .then(({ data }) => {
        data.map(movement => this.movimientos.push(movement));
      })
      .catch(err => console.error('ERRRRR => ', err));
  }
};
</script>
