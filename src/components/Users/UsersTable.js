import React from "react";
import { AutoSizer, Column, Table } from "react-virtualized";
import "react-virtualized/styles.css"; // Default styles for react-virtualized
import { Paper, TableContainer } from "@mui/material";
import { faker } from "@faker-js/faker/locale/en";

// Generate dummy data
const rows = Array.from({ length: 200 }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
}));

function UsersTable() {
    return (
        <Paper
            sx={{
                width: "100%",
                overflow: "hidden",
                padding: 2,
                boxSizing: "border-box",
            }}
        >
            <TableContainer sx={{ height: 500 }}>
                <AutoSizer>
                    {({ height, width }) => (
                        <Table
                            width={width}
                            height={height}
                            headerHeight={50}
                            rowHeight={50}
                            rowCount={rows.length}
                            rowGetter={({ index }) => rows[index]}
                            rowClassName="tableRow"
                        >
                            {/* ID Column */}
                            <Column
                                label="ID"
                                dataKey="id"
                                width={100}
                                headerRenderer={({ label }) => (
                                    <div style={{ fontWeight: "bold" }}>
                                        {label}
                                    </div>
                                )}
                                cellDataGetter={({ rowData, dataKey }) =>
                                    rowData[dataKey]
                                }
                                cellRenderer={({ cellData }) => (
                                    <strong>{cellData}</strong>
                                )}
                            />

                            {/* Name Column */}
                            <Column
                                label="Name"
                                dataKey="name"
                                width={250}
                                headerRenderer={({ label }) => (
                                    <div style={{ textTransform: "uppercase" }}>
                                        {label}
                                    </div>
                                )}
                                cellDataGetter={({ rowData }) =>
                                    rowData.name.toUpperCase()
                                } // Example: Uppercase Name
                                cellRenderer={({ cellData }) => (
                                    <span>{cellData}</span>
                                )}
                            />

                            {/* Email Column */}
                            <Column
                                label="Email"
                                dataKey="email"
                                width={300}
                                headerRenderer={({ label }) => (
                                    <span>{label}</span>
                                )}
                                cellDataGetter={({ rowData }) =>
                                    rowData.email.toLowerCase()
                                }
                                cellRenderer={({ cellData }) => (
                                    <a href={`mailto:${cellData}`}>
                                        {cellData}
                                    </a>
                                )}
                            />
                        </Table>
                    )}
                </AutoSizer>
            </TableContainer>
        </Paper>
    );
}

export default UsersTable;
