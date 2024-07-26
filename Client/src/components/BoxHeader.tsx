import { useTheme, Box, Typography } from '@mui/material';
import FlexBetween from './FlexBetween';
import React from 'react';

type Props = {
    icon?: React.ReactNode;
    title: string;
    subtitle?: string;
    sidetext?: string;
}

const BoxHeader = ({ icon, title, subtitle, sidetext }: Props) => {
    const { palette } = useTheme();
    return (
        <FlexBetween >
            <FlexBetween
                color={palette.secondary[500]}
                margin="1rem 0rem 0.5rem 1rem"
            >
                {icon}
                <Box>
                    <Typography variant='h4' mb="-0.1rem">
                        {title}
                    </Typography>
                    <Typography variant='h6' text-overflow="ellipsis" overflow="hidden">{subtitle}</Typography>
                </Box>
            </FlexBetween>

            <Typography
                variant='h5'
                fontWeight={700}
                color={palette.secondary[500]}
                marginRight="1rem"
            >
                {sidetext}
            </Typography>
        </FlexBetween>
    )
}

export default BoxHeader;