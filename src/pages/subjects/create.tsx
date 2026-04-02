import React from "react";
import { CreateView } from "@/components/refine-ui/views/create-view.tsx";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useBack } from "@refinedev/core";
import { Separator } from "@/components/ui/separator.tsx";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "@refinedev/react-hook-form";
import { subjectSchema } from "@/lib/schema.ts";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select.tsx";
import { DEPARTMENT_OPTIONS } from "@/constants";

const SubjectCreate = () => {
    const back = useBack();

    const form = useForm({
        resolver: zodResolver(subjectSchema),
        refineCoreProps: {
            resource: "subjects",
            action: "create",
            redirect: "list",
        },
    });

    const {
        refineCore: { onFinish, formLoading },
        control,
        handleSubmit,
    } = form;

    return (
        <CreateView className="subject-view">
            <Breadcrumb />
            <h1 className="page-title text-3xl font-bold">Create a Subject</h1>
            <div className="intro-row flex justify-between items-center">
                <p className="text-muted-foreground">
                    Add a new subject to the curriculum.
                </p>
                <Button variant="outline" onClick={back}>
                    Go Back
                </Button>
            </div>
            <Separator />
            <div className="my-4 flex justify-center">
                <Card className="w-full max-w-2xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">
                            Subject Details
                        </CardTitle>
                    </CardHeader>
                    <Separator />
                    <CardContent className="mt-6">
                        <Form {...form}>
                            <form
                                onSubmit={handleSubmit(onFinish)}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="e.g. Mathematics"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={control}
                                        name="code"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Code</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="e.g. MATH101"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={control}
                                    name="department"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Department</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a department" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {DEPARTMENT_OPTIONS.map(
                                                        (option) => (
                                                            <SelectItem
                                                                key={
                                                                    option.value
                                                                }
                                                                value={
                                                                    option.value
                                                                }
                                                            >
                                                                {option.label}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Provide a brief description of the subject"
                                                    className="min-h-24"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={formLoading}
                                >
                                    {formLoading
                                        ? "Creating..."
                                        : "Create Subject"}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </CreateView>
    );
};

export default SubjectCreate;
