import { Box, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./CategorySlice";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

export function ListCategory() {
    const categories = useAppSelector(selectCategories);

    const componentProps = {
        toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
        },
    };

    const rows: GridRowsProp = categories.map((category) => ({
        id: category.id,
        name: category.name,
        is_active: category.is_active,
        created_at: new Date(category.created_at).toLocaleDateString('pt-BR'),
    }));

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Nome',
            flex: 1,
            renderCell: renderNameCell
        },
        {
            field: 'is_active',
            headerName: 'Active',
            flex: 1,
            type: "boolean",
            renderCell: renderIsActiveCell,
        },
        {
            field: 'created_at',
            headerName: 'Created At',
            flex: 1,
        },
        {
            field: 'id',
            headerName: 'Actions',
            flex: 1,
            renderCell: renderActionsCell
        }
    ];

    function renderNameCell(rowData: GridRenderCellParams) {
        return (
            <Link
                style={{ textDecoration: "none" }}
                to={`/category/edit/${rowData.id}`}
            >
                <Typography color="primary">{rowData.value}</Typography>
            </Link>
        );
    }

    function renderActionsCell(row: GridRenderCellParams) {
        return (
            <IconButton
                color="secondary"
                onClick={() => console.log(row)}
                aria-label="delete">
                <DeleteIcon />
            </IconButton>
        );
    }

    function renderIsActiveCell(row: GridRenderCellParams) {
        return (
            <Typography color={row.value ? "primary" : "secondary"}>
                {row.value ? "Active" : "Inactive"}
            </Typography>
        );
    }

    return (
        <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box display="flex" justifyContent="flex-end">
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/categories/create"
                    style={{ marginBottom: "1rem" }}
                >
                    New Category
                </Button>
            </Box>

            <Box style={{ display: "flex", height: 600 }}>
                <DataGrid
                    components={{ Toolbar: GridToolbar }}
                    rowsPerPageOptions={[5, 10, 20, 50, 100]}
                    disableColumnSelector={true}
                    disableColumnFilter={true}
                    disableDensitySelector={true}
                    rows={rows}
                    columns={columns}
                    componentsProps={componentProps}
                />
            </Box>
        </Box>
    );
}