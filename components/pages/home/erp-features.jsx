import Blue from '@/components/wrappers/blue'
import Container from '@/components/wrappers/container'
import Image from 'next/image'

export default function ErpFeatures() {
    return (
        <Container parentclassName="bg-light-blue" childclassName="py-20 grid place-items-center text-center">
            <div className="grid place-items-center gap-y-1 max-w-[754px] pb-8">
                <h1 className="text-[42px] font-extrabold">Essential <Blue>ERP Features</Blue> to Accelerate
                    Your Team's Workflow</h1>
                <p className="text-xl font-medium">100+ features across 11 integrated modules to take productivity to the next level</p>
            </div>
            <Image
                src={"/home/svgs/erp-features.svg"}
                height={1000}
                width={1300}
                className="object-contain"
                alt="feature rich hysabat"
            />
        </Container>
    )
}
