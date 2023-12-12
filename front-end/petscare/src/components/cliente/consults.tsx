import * as React from 'react';
import { FC } from 'react';
import { PetConsults } from '@/interfaces';
import Stack from '@mui/material/Stack';
import { Divider, Typography } from '@mui/material';
import {
    GridCellParams, GridColDef, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton, DataGrid, GridToolbar, GridPrintGetRowsToExportParams, gridFilteredSortedRowIdsSelector,
    selectedGridRowsSelector,
    esES, GridRowId
} from '@mui/x-data-grid';
import styles from './client.module.css'


const columns: GridColDef[] = [
    {
        field: 'cratedAt',
        headerName: 'Fecha',
        minWidth: 120,
        sortable: true,
        renderCell: (params: GridCellParams) => <>{params.value}</>
    },
    {
        field: 'diagnostic',
        headerName: 'Diagnóstico',
        minWidth: 170,
        sortable: true,
        renderCell: (params: GridCellParams) => <>{params.value}</>
    },
    {
        field: 'drugs',
        headerName: 'Medicación',
        minWidth: 170,
        sortable: true,
        renderCell: (params: GridCellParams) => <>{params.value}</>
    },
    {
        field: 'exams',
        headerName: 'Exámenes',
        minWidth: 170,
        sortable: true,
        renderCell: (params: GridCellParams) => <>{params.value}</>
    },

]


interface Props {
    data: PetConsults
}

const DataGridConsults: FC<Props> = ({ data }) => {

    const pageSize = 5;
    const pageSizeOptions = [data?.consults.length === 0 ? 0 : pageSize];

    const rows = data?.consults

    function CustomToolbar() {
        return (
            <GridToolbarContainer >
                <Stack className={styles.dataPet} >
                    <Typography className={styles.textPet}><strong>NOMBRE:</strong> {data.pet.name} </Typography>
                    <Typography className={styles.textPet}><strong>TIPO: </strong> {data.pet.petType.typeName} </Typography>
                    <Typography className={styles.textPet}><strong>RAZA: </strong>{data.pet.race}</Typography>
                    <Typography className={styles.textPet}><strong>TAMAÑO:</strong> {data.pet.size} </Typography>
                </Stack>
                <GridToolbarFilterButton />
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    const getSelectedRowsToExport = ({
        apiRef,
    }: GridPrintGetRowsToExportParams): GridRowId[] => {
        const selectedRowIds = selectedGridRowsSelector(apiRef);
        if (selectedRowIds.size > 0) {
            return Array.from(selectedRowIds.keys());
        }
        return gridFilteredSortedRowIdsSelector(apiRef);
    };

    return (
        <div style={{ height: 400, width: '100%' }}>

            {data?.consults.length !== 0 ?

                <DataGrid
                    columns={columns}
                    rows={rows}
                    autoHeight
                    checkboxSelection
                    getRowId={(row) => row.id}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: pageSize,
                            }
                        }
                    }}
                    pageSizeOptions={pageSizeOptions}
                    slots={{ toolbar: CustomToolbar }} 
                    slotProps={{
                        toolbar: { CustomToolbar: { printOptions: { getRowsToExport: getSelectedRowsToExport }, showQuickFilter: true } },
                    }}
                    localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                    disableColumnSelector
                    disableDensitySelector
                />
                :
                <Typography> Por el momento su mascota no registra consultas </Typography>

            }

        </div>
    );
}


export default DataGridConsults


