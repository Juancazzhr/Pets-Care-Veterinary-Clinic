import * as React from 'react';
import {
    GridCellParams, GridColDef, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton, DataGrid,
    GridToolbar,
    GridPrintGetRowsToExportParams,
    gridFilteredSortedRowIdsSelector,
    selectedGridRowsSelector,
    GridRowId,
    esES,
    GridSearchIcon,
} from '@mui/x-data-grid';
import { FC } from 'react';
import { PetConsults } from '@/interfaces';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';



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
        headerName: 'Diagnostico',
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
    const pageSizeOptions = [5, 10, 20];

    const rows = data?.consults

    function CustomToolbar() {
        return (
            <GridToolbarContainer >
                <Stack >
                    <Typography>Nombre: </Typography>
                    <Typography>Tipo: </Typography>
                    <Typography>Raza: </Typography>
                    <Typography>Tamaño: </Typography>
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
                slots={{ toolbar: CustomToolbar }} /* GridToolbar */
                slotProps={{
                    toolbar: {CustomToolbar:{ printOptions: { getRowsToExport: getSelectedRowsToExport }, showQuickFilter: true }},
                }}
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                disableColumnSelector
                disableDensitySelector
            />
        </div>
    );
}


export default DataGridConsults



/*  const [rows, setRows] = useState(
   { createdAt: '',
         diagnostic: '',
         exams:'',
         drugs: ''}
     
 ); */

/*    const getData = async () => {
       
       data.consults.forEach((d) => {
         setRows((row) => [
           ...row,
           {
             {  createdAt: d.cratedAt,
               diagnostic: d.diagnostic,
               exams: d.exams,
               drugs: d.drugs}
           },
         ]);
       });
     };
*/

/* import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    root: {
        "& .styledrows": {
            backgroundColor: "green"
        }
    }
});
 

const VISIBLE_FIELDS = ['Fecha', 'Mascota', 'Diagnóstico', 'Exámenes', 'Medicación'];

export default function BasicExampleDataGrid() {
    const { data } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
    });

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid {...data} slots={{ toolbar: GridToolbar }}
                initialState={{
                    filter: {
                        filterModel: {
                            items: [{ field: 'rating', operator: '>', value: '2.5' }],
                        },
                    },
                }} />
        </div>
    );
}*/