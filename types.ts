import { ReactNode } from "react";

export interface FeatureCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    stats?: string;
    delay?: number;
}

export interface MetricCardProps {
    value: string;
    label: string;
    subtext: string;
    trend?: string;
    icon: ReactNode;
}

export interface PricingTierProps {
    name: string;
    price: string;
    agents: string;
    features: string[];
    recommended?: boolean;
}